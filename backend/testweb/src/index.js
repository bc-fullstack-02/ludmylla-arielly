const path = require("path");
const fs = require("fs");
const express = require("express");
const { Client } = require("pg");

const app = express();
app.use(express.json());
const router = express.Router();

//app.use('/', express.static(path.join(__dirname, 'index.html')))

let db = [
  {
    id: "636d6a33f82b50850d0fa747",
    title: "hello",
    body: "hello world body blabla",
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: "636d6a33f82b50850d0fa758",
    title: "hello",
    body: "hello world body blabla",
    create_at: new Date(),
    update_at: new Date(),
  },
];

function connect() {
  const client = new Client({
    connectionString:
      "postgresql://postgres:postgres@localhost:5432/socialnetwork",
  });
  return client.connect().then(() => {
    return client;
  });
}

router
  .route("/posts")
  .all((req, res, next) => {
    console.log(new Date());
    return connect().then((client) => {
      req.db = client;
      next();
    });
  })
  .get((req, res) => {
    req.db
      .query("SELECT id, title, body, create_at, update_at from post;")
      .then((data) => {
        res.send(data.rows);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).end();
      });
  })

  .post((req, res) => {
    const { id, title, body, create_at, update_at } = req.body;
    req.db.query(
      "INSERT INTO post (id, title, body, create_at, update_at) VALUES ($1, $2, $3, $4, $5)",
      [id, title, body, create_at, update_at]
    );
    db.push(req.body);
    res.status(201);
  });

router
  .param("id", (req, res, next) => {
    console.log(new Date());
    return connect().then((client) => {
      req.db = client;
      next();
    });
  })
  .route("/posts/:id")

  .get((req, res) => {
    const code = req.params.id;
    req.db
      .query(
        "SELECT id, title body, create_at, update_at from post WHERE id = $1",
        [code]
      )
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).end();
      });
  })

  .put((req, res) => {
    const { title, body, update_at } = req.body;
    const id = req.params.id;
    req.db.query(
      "UPDATE post SET title = $1, body = $2, update_at = $3 WHERE id = $4",
      [title, body, update_at, id]
    );

    const ret = db.find((e) => e.id === req.params.id);
    if (ret) {
      db = db.map((e) => {
        if (e.id === req.params.id) {
          return req.body;
        } else {
          return e;
        }
      });
      res.status(200);
      res.end();
    } else {
      res.status(400);
    }
  })
  .delete((req, res) => {
    const id = req.params.id;
    req.db.query("DELETE FROM post WHERE id = $1", [id]);

    const ret = db.find((e) => e.id === req.params.id);
    if (ret) {
      db = db.filter((e) => {
        if (e.id === req.params.id) {
          return req.body;
        } else {
          return e;
        }
      });
      res.status(200);
      res.end();
    } else {
      res.status(400);
    }
  });

app.use(router);

app.listen(4000, () => {
  console.log("server listem on http://localhosto:4000");
});

































