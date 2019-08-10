import sys
from StudentVue import studentvue
id = sys.argv[1]
password = sys.argv[2]
url = sys.argv[3]
sv = studentvue.StudentVue(id, password, url) # e.g. portal.sfusd.edu
print(sv.getStudentInfo())
#print(id)
