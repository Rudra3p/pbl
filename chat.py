import socket
import threading
from xml.dom.minidom import Document

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

def connect():
    # Connect to the server
    client.connect(('127.0.0.1', 1234))
    print("Successfully connected to server")
    username = Document.getElementById('username_input_chat').value
    client.sendall(username.encode())
    threading.Thread(target=listen_for_messages_from_server).start()

def send_message():
    message = Document.getElementById('message_input').value
    client.sendall(message.encode())
    Document.getElementById('message_input').value = ''

def listen_for_messages_from_server():
    while True:
        message = client.recv(2048).decode('utf-8')
        if message != '':
            Document.getElementById('message_box').innerHTML += message + '<br>'