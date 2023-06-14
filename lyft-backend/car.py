from  serviceable import Serviceable

class Car(Serviceable):

    def __init__(self,engine, battery):
        self.engine = engine
        self.battery = battery

    def need_services(self):
        return self.engine.need_services() or self.battery.need_services()
        