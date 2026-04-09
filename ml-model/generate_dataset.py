import random
import pandas as pd

bet_words = ["bet", "casino", "win", "money", "jackpot", "gambling"]
normal_words = ["study", "college", "project", "hello", "meeting", "class"]

def generate_betting():
    return f"{random.choice(bet_words)} {random.choice(bet_words)} {random.choice(['now','today','app','online'])}"

def generate_normal():
    return f"{random.choice(normal_words)} {random.choice(normal_words)} {random.choice(['today','now','work','plan'])}"

data = []

for _ in range(1000):
    data.append([generate_betting(), 1])
    data.append([generate_normal(), 0])

df = pd.DataFrame(data, columns=["text", "label"])
df.to_csv("dataset.csv", index=False)

print("Better dataset created ✅")