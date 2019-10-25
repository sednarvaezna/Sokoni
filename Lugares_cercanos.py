import requests
import json


key = "Ingrese aquí su clave de google maps" #Registre la clave de google maps
location = "6.256224,-75.5817902"  # Acá va la latitud y longitud en ese órden
radius = "100" #Es el radio de busqueda de lugares alrededor del punto escogido (esta en metros)
keyword = "restaurante" #Es la palabra clave que se desea buscar
url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+"&radius=" + radius + "&keyword=" + keyword + "&key=" + key

data = requests.request('GET',url)
data_json = data.json()

with open('data.json', 'w') as file:
    json.dump(data_json, file, indent=4)