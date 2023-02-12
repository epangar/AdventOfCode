#!/usr/bin/python3
import os

class Day2:
    def __init__(self):
        self.input = [int(n) for n in open(os.path.join(os.path.dirname(os.path.realpath(__file__)), './2019/2.txt'), 'r').read().split(",")]
        self.first = self.calculate_first(self.input)
        self.second = self.calculate_second(self.input)
    
    def intcode(self, arr_input):
        for i in range(0, len(arr_input), 4):
            #Check the operation, the second and third parameters and their future position
            current_code =  arr_input[i]
            second = arr_input[i+1]
            third = arr_input[i+2]
            place = arr_input[i+3]
            
            if current_code == 99:
                break
            elif current_code == 1:
                arr_input[place] = arr_input[second] + arr_input[third]
            elif current_code == 2:
                arr_input[place] = arr_input[second] * arr_input[third]
    
        return arr_input

    def calculate_first(self, arr_input):
        arr_copy = arr_input.copy()
        arr_copy[1] = 12
        arr_copy[2] = 2
        return self.intcode(arr_copy)[0]

    def calculate_second(self, arr_input):#, arr_input, input_noun, input_verb):
        arr_copy = arr_input.copy()
        return 4

    def run_decoder(self,input_list, output):
        for noun in range(100):
            for verb in range(100):
                if self.calculate_second(input_list, noun, verb) == output:
                    return (100 * noun) + verb
        return -1

#print(Day2().decoded_input)
print(Day2().first, Day2().second)