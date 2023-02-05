#!/usr/bin/python3

class Day2:
    def __init__(self):
        self.first = self.calculate_first()
        self.second = self.calculate_second()
    
    def calculate_first(self):
        return 3

    def calculate_second(self):
        return 4

print({"part1": Day2().first, "part2": Day2().second})