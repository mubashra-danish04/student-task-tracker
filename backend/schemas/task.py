from pydantic import BaseModel
from datetime import datetime

class TaskBase(BaseModel):
  
    title:str
    description:str
    status:str
    due_date:datetime
    created_at:datetime
    updated_by:datetime

class TaskCreate(TaskBase):
    pass

class Task(UserBase):
    id:int 
    
    model_config = {
        "from_attributes":True
    }