import psycopg2
import csv

if __name__ == "__main__":
    conn = psycopg2.connect(host="scrapy.postgres.database.azure.com",
    database="postgres", user="scrapy@scrapy", password="Marcosmolcrente123")
    cursor = conn.cursor()

    with open('vai.csv', 'r') as file:
        test = csv.reader(file, delimiter=',')
        for i in test:
            cursor.execute(f"INSERT INTO scrapy_conteudo(palavra) values('{i[2]}') RETURNING id")
            id = cursor.fetchone()[0]
            cursor.execute(f"""
            INSERT INTO scrapy_pagina(titulo, link, conteudo_id, rank)
            VALUES('{i[0]}', '{i[1]}', {id}, 0)
            """)
            print(i)    
        conn.commit()
        conn.close()
