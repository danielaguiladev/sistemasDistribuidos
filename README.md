<h1>
GuluGulu - Passo a Passo
</h1>

<h4>
Grupo composto por:
</h4>
Daniel Aguila
<br>
Gabrielle Liberato
<br>
Marcos Mol
<br>
Sandro Caio

<h3>
Disposição do ambiente:
</h3>
Backend: https://gulugulu.herokuapp.com/
<br>
Frontend: http://danielaguiladev.github.io/sistemasDistribuidos
<br>
Banco: scrapy.postgres.database.azure.com
<br>

<h2>
Rodar o Django
</h2>

<h3>
Instalar depedencias
</h3>
Instale as dependencias do projeto:

```
cd api
pip install -r requirements.txt
PS: Use python3 para esse projeto
```

<h3>
Rodar o Django no dockerfile 
</h3>

Vá até o caminho onde se encontra o Dockerfile e rode o exemplo abaixo

Exemplo

```
cd api
docker build -t gulugulu . && docker run -i -p 8000:8000 gulugulu
<b> Sirva-se a vontade
```

<h2>
JavaScript ReactJS
</h2>

Para rodar o ReactJs:
 ```
cd ui
npm install
npm start
PS: Pode haver a necessidade de instalar alguma biblioteca
 ```

 <h3>
 Arquivo consts.js
 </h3>

 No arquivo consts.js vc ira colocar o host em que sua aplicacao web possa rodar.

 ```
Padrão:
 export const API_HOST = 'http://localhost:8000'
 Para rodar externamente use o ip que você colocou no Django
 ```