insert ignore into events (id, idUser, title, description, dateTimeStart, dateTimeEnd) VALUES (
    NULL,
    (SELECT ID FROM users WHERE title = 'testUserName'),
    'my event',
    'my description',
    '2008-11-11',
    '2008-11-11'
);

insert ignore into events (id, idUser, title, description, dateTimeStart, dateTimeEnd) VALUES (
    NULL,
    (SELECT ID FROM users WHERE title = 'testUserName'),
    'my event 2',
    'my description 2',
    '2008-11-12',
    '2008-11-12'
);
