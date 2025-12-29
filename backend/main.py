from fastapi import FastAPI
from database.db import Base,engine
from database.models import Task 

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def root():
    return "hellooo"