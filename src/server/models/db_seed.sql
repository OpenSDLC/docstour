DROP TABLE IF EXISTS documents_table;
DROP TABLE IF EXISTS categories_table;
DROP TABLE IF EXISTS users_table;

CREATE TABLE users_table (user_id SERIAL UNIQUE NOT NULL PRIMARY KEY, username VARCHAR(80) NOT NULL, password VARCHAR(255) NOT NULL, role VARCHAR(80) NOT NULL);
CREATE TABLE categories_table (category_id SERIAL UNIQUE NOT NULL PRIMARY KEY, category_name VARCHAR(80) NOT NULL, user_id INTEGER REFERENCES users_table (user_id));
CREATE TABLE documents_table (document_id SERIAL UNIQUE NOT NULL PRIMARY KEY, document_name VARCHAR(80) NOT NULL, url VARCHAR(255) NOT NULL, notes TEXT, created_at DATE, category_id INTEGER REFERENCES categories_table (category_id));

INSERT INTO users_table(username, password, role) VALUES('MXJRD', 'password123', 'admin');
INSERT INTO users_table(username, password, role) VALUES('taoan', 'password1234', 'admin');
INSERT INTO users_table(username, password, role) VALUES('Tammy', 'password1235', 'admin');
INSERT INTO users_table(username, password, role) VALUES('Anthony', 'password1236', 'admin');

INSERT INTO categories_table(category_name, user_id) VALUES('Maxs Category', 1);
INSERT INTO categories_table(category_name, user_id) VALUES('Tolans Category', 2);
INSERT INTO categories_table(category_name, user_id) VALUES('Tammy Category', 3);
INSERT INTO categories_table(category_name, user_id) VALUES('Anthonys Docs', 4);

INSERT INTO documents_table(document_name, url, notes, category_id) VALUES('Anthonys Doc 001', 'http://docstour.org/lilRapName/001',  'Regularly kicked out of Zoom', 4);
INSERT INTO documents_table(document_name, url, notes, category_id) VALUES('NO CORS === NO GOOD', 'http://hackme.org/lilRapName/001',  'I\m watching YOU!', 4);
