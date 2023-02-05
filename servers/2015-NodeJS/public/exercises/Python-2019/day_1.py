#!/usr/bin/python3

class Day1:
    def __init__(self):
        self.first = self.calculate_first()
        self.second = self.calculate_second()
    
    def calculate_first(self):
        return 1

    def calculate_second(self):
        return 2

print({"part1": Day1().first, "part2": Day1().second})