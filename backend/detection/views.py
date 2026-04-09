import pickle
import os
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from analytics.models import Activity

# Test API
@api_view(['GET'])
def test_api(request):
    return Response({"message": "API is working 🚀"})


# Load model
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
model_path = os.path.join(BASE_DIR, "../ml-model/model.pkl")
vectorizer_path = os.path.join(BASE_DIR, "../ml-model/vectorizer.pkl")

model = pickle.load(open(model_path, "rb"))
vectorizer = pickle.load(open(vectorizer_path, "rb"))


# Prediction API
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def predict(request):
    text = request.data.get("text")

    if not text:
        return Response({"error": "No text provided"}, status=400)

    # Transform input
    vec = vectorizer.transform([text])

    # Get probability
    prob = model.predict_proba(vec)[0][1]

    # Apply threshold
    if prob > 0.8:
        prediction = "Betting ⚠️"
    else:
        prediction = "Safe ✅"

    # Save to DB
    Activity.objects.create(
        user=request.user,
        text=text,
        result=prediction
    )

    return Response({
        "input": text,
        "prediction": prediction,
        "confidence": float(prob)
    })