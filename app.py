from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

puntajes = []

@app.route("/api/mensaje")
def mensaje():
    return jsonify({"mensaje": " Hola desde Python "})

@app.route("/api/guardar_puntaje", methods=["POST"])
def guardar_puntaje():
    data = request.json
    puntos = data.get("puntos")
    puntajes.append(puntos)
    return jsonify({"mensaje": "Puntaje guardado"})

@app.route("/api/puntajes")
def ver_puntajes():
    return jsonify(puntajes)

app.run(debug=True)
