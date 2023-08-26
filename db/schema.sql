

DROP TABLE IF EXISTS todos;
CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, name TEXT, done INTEGER DEFAULT 0 );
INSERT INTO todos (id, name, done) VALUES (1, 'Buy milk', 1), (2,  'Buy eggs', 0), (3, 'Pick up laundry', 0), (4,  'Get car washed', 0);
