import re
# Librerias para el preprocesamiento
import spacy
nlp = spacy.load('es_core_news_sm')

# Funcion para limpiar el texto utilizando spacy
def clean_text(text):
    # Pasar a minusculas
    text = text.lower()

    # Eliminar las tildes
    text = re.sub(r'[á]', 'a', text)
    text = re.sub(r'[é]', 'e', text)
    text = re.sub(r'[í]', 'i', text)
    text = re.sub(r'[ó]', 'o', text)
    text = re.sub(r'[ú]', 'u', text)
    
    # Eliminar los numeros
    text = re.sub(r'\d+', ' ', text)

    # Eliminar los signos de puntuacion
    text = re.sub(r'[^\w\s]', ' ', text)

    # Tokenizar
    tokens = nlp(text)

    # Eliminar stopwords
    tokens = [token.text for token in tokens if not token.is_stop]

    # Unir los tokens
    text = ' '.join(tokens)

    return text
