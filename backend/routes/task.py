from fastapi import APIRouter,Depends,Form
from database.db import get_db
from services import task as task_service
from schemas import task as task_schema
from typing import Annotated
from sqlalchemy.orm import Session
router = APIRouter(prefix="/task",tags=["Task"])

@router.post("/create")
def create_task(task: task_schema.TaskCreate, db: Session = Depends(get_db)):
    print(task)
    return task_service.create_task(db, task)

@router.get("/")
def get_task(db:Session=Depends(get_db)):
    return task_service.get_task(db)

@router.get("/{id}")
def get_task_by_id(id:int,db:Session=Depends(get_db)):
    return task_service.get_task_by_id(id,db)

@router.put("/{id}")
def update_task(id:int,task:task_schema.TaskCreate,db:Session=Depends(get_db)):
    return task_service.update_task(id,db,task)


@router.delete("/{id}")
def delete_task(id:int,db:Session=Depends(get_db)):
    return task_service.delete_task(id,db)