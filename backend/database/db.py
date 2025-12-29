from sqlalchemy import create_engine,MetaData
from sqlalchemy.orm import sessionmaker,declarative_base

db_url="mysql+pymysql://root:root@localhost:3306/StudentTaskTracker"

engine = create_engine(db_url)
SessionLocal = sessionmaker(bind=engine,autocommit=False,autoflush=False)
metadata=MetaData()
Base = declarative_base(metadata=metadata)
def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

