from battery import Battery

class NubbinBattery(Battery):

    def __init__(self, current_date, date_end):
        self.current_date = current_date
        self.date_end = date_end

    def need_services(self):
         if self.date_end  >= self.current_date:
             return True
         else:
             False