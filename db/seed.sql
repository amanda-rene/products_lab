CREATE TABLE product(
    product_id SERIAL PRIMARY KEY NOT NULL,
    names VARCHAR(40) NOT NULL,
    descriptions VARCHAR(80) NOT NULL,
    price INTEGER NOT NULL,
    image_url TEXT NOT NULL
);