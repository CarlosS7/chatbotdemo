import urllib

file = urllib.URLopener()

file.retrieve('https://raw.githubusercontent.com/watson-developer-cloud/car-dashboard/ad38bf588fda8041e22eced32d6166ddc5024715/training/car_workspace.json', 'car_workspace.json')
