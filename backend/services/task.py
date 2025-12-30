from database.db import get_db
from services import task as task_service
from schemas import task as task_schema
from database import models
from fastapi import HTTPException
def create_task(db:Session,task:task_schema.TaskCreate):
    exist=db.query(models.Task).filter(models.Task.title==task.title).first()
    if exist:
         raise HTTPException(status_code=400, detail="Task with this id exist")
    db_task=models.Task(
        title = task.title,
        description = task.description,
        status = task.status,
        due_date = task.due_date,
        created_time = task.created_time,
        updated_time = task.updated_time,

    )
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task
def get_task(db:Session):
    return db.query(models.Task).all()

def get_task_by_id(id:int,db:Session):
    exist = db.query(models.Task).filter(models.Task.id==id).first()
    if not exist:
        raise HTTPException(status_code=404,description="Not Found")
    return exist

def update_task(id:int,db:Session,task:task_schema.TaskCreate):
    exist = db.query(models.Task).filter(models.Task.id==id).first()
    if not exist:
        raise HTTPException(status_code=404,description="Not Found")
    exist.title=task.title
    exist.description=task.description
    exist.status=task.status
    db.commit()
    db.refresh(exist)
    
    return exist

def delete_task(id:int,db:Session):
    exist = db.query(models.Task).filter(models.Task.id == id).first()
    if exist:
        db.delete(exist)
        db.commit()
    return exist