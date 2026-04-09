from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Activity
from .models import BlockedSite


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_analytics(request):
    activities = Activity.objects.filter(user=request.user)

    total = activities.count()
    risky = activities.filter(result="Betting ⚠️").count()
    safe = activities.filter(result="Safe ✅").count()

    return Response({
        "total_checks": total,
        "risky": risky,
        "safe": safe
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_block(request):
    url = request.data.get("url")
    text = request.data.get("text")
    confidence = request.data.get("confidence")

    BlockedSite.objects.create(
        user=request.user,
        url=url,
        text=text,
        confidence=confidence
    )

    return Response({"message": "Saved"})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def blocked_history(request):
    data = BlockedSite.objects.filter(user=request.user)

    result = [
        {
            "url": i.url,
            "confidence": i.confidence,
            "time": i.created_at
        }
        for i in data
    ]

    return Response(result)