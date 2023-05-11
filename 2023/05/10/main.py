"""
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that
pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons, implement car and cdr:
"""
def cons(a, b):
    """given"""
    def pair(f):
        return f(a, b)
    return pair

# I feel like this is a python thing
# idk
# with js you'd just use arrays
# if I'm understanding the problem correctly
# ugh idk

def car(pair):
    def first(a, b):
        return a
    return pair(first)

def cdr(pair):
    def last(a, b):
        return b
    return pair(last)

# something like that
