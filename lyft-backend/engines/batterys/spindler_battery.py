from battery import Battery

class SpindlerBattery(Battery):
    def __init__(self,current_date, date_end):
        self.current_date = current_date
        self.date_end = date_end

    def need_service(self):
     
     if self.date_end >= self.current_date:
        return True
     else:
        return False
      
     