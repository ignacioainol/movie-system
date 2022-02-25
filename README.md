# CRUD Movies Node-Express

_Sistema que permite crear, listar, actualizar y eliminar registros de películas 🚀_

Run server
```
npm start   // prod mode
npm run dev // dev mode
```

El sistema permite:
- Ingresar una película con los atributos Nombre, Fecha de estreno, Género.
- Editar el Nombre, Fecha de estreno o Género de la película por id.
- Eliminar una película con su id.
- Listar todas las películas ingresadas.
- Listar peĺicula según id.

### Ingresar película:
```
POST /api/movie/
Input body:
name: String,
releaseDate: Date (DD/MM/YYYY),
genre: String
```

### Retorna:
```
{
_id: ObjectId,
name: String,
releaseDate: Date,
genre: String,
createdAt: Date,
updatedAt: Date
}
```

### Editar película por id:
```
PUT /api/movie/:id
Input body:
name: String,
releaseDate: Date,
genre: String
```

### Retorna:
```
{
    msg: La película con id {:id} ha sido actualizada con éxito.
}
```

### Eliminar Película por id:
```
DELETE /api/movie/:id
```

### Retorna:
```
{
_id: ObjectId,
name: String,
releaseDate: Date,
genre: String,
createdAt: Date,
updatedAt: Date
}
```

### Lista Película por id:
```
GET /api/movie/:id
```

### Retorna:
```
{
_id: ObjectId,
name: String,
releaseDate: Date,
genre: String,
createdAt: Date,
updatedAt: Date
}
```
### Lista Todas las Películas:
```
GET /api/movie/
```

### Retorna cada película con la sigte estructura:
```
{
_id: ObjectId,
name: String,
releaseDate: Date,
genre: String,
createdAt: Date,
updatedAt: Date
}
```

