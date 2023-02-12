#!/usr/bin/python3
import math, functools, os

class Day1:
    def __init__(self):
        self.input = [int(n) for n in open(os.path.join(os.path.dirname(os.path.realpath(__file__)), './2019/1.txt'), 'r').read().split("\n")]
        self.first = self.calculate_first(self.input)
        self.second = self.calculate_second(self.input)
    
    def calculate_first(self, arr_input):
        fuel_list = [math.floor(fuel/3)-2 for fuel in arr_input]
        return functools.reduce(lambda a,b: a+b, fuel_list)

    def calculate_second(self, arr_input):
        return functools.reduce(lambda a,b: a+b, [self.calculate_suplementary_fuel(fuel) - fuel for fuel in arr_input])
    
    def calculate_suplementary_fuel(self, input):
        current = math.floor(input/3)-2
        
        if current <= 0:
            return input
        else:
            return input + self.calculate_suplementary_fuel(current)

print(Day1().first, Day1().second)