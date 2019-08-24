import sys
import studentvue
import jsonpickle
id = sys.argv[1]
password = sys.argv[2]
url = sys.argv[3]
sv = studentvue.StudentVue(id, password, url) # e.g. portal.sfusd.edu
print(jsonpickle.encode(sv.get_classes(), unpicklable=False))
#print(id)
