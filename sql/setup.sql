DROP TABLE IF EXISTS notifications;

CREATE TABLE notifications (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    phone TEXT NOT NULL,
    lat DOUBLEPREC NOT NULL,
    range TEXT NOT NULL,
    threshold INT NOT NULL
);

