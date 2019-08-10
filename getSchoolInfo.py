import sys
from StudentVue/studentvue import StudentVue
id = sys.argv[1]
password = sys.argv[2]
url = sys.argv[3]
sv = StudentVue(id, password, url) # e.g. portal.sfusd.edu
print(sv.getSchoolInfo())
#print(id)
