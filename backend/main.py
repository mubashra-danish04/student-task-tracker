from fastapi import FastAPI
from database.db import Base,engine
from database.models import Task 
from routes import task
Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(task.router)
@app.get("/")
def root():
    return "hellooo"