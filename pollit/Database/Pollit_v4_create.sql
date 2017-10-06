-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-05-30 22:51:43.105

-- tables
-- Table: articles
CREATE TABLE articles (
    a_id serial  NOT NULL,
    title text  NOT NULL,
    url text  NOT NULL,
    thumbnail_url text  NOT NULL,
    CONSTRAINT Article_pk PRIMARY KEY (a_id)
);

-- Table: comments
CREATE TABLE comments (
    c_id serial  NOT NULL,
    text text  NOT NULL,
    CONSTRAINT Comment_pk PRIMARY KEY (c_id)
);

-- Table: votes
CREATE TABLE votes (
    v_id serial  NOT NULL,
    cs real  NOT NULL,
    x real  NOT NULL,
    y real  NOT NULL,
    CONSTRAINT Vote_pk PRIMARY KEY (v_id)
);

-- foreign keys
-- Reference: articles_comments (table: comments)
ALTER TABLE comments ADD CONSTRAINT articles_comments
    FOREIGN KEY (c_id)
    REFERENCES articles (a_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: articles_votes (table: votes)
ALTER TABLE votes ADD CONSTRAINT articles_votes
    FOREIGN KEY (v_id)
    REFERENCES articles (a_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.


INSERT INTO articles( 
	title,
    url,
    thumbnail_url
	) 
VALUES (
	'Firing James Comey to impede an investigation isn''t smoke. It''s fire.',
    'https://www.vox.com/policy-and-politics/2017/5/15/15627284/trump-comey-firing-obstruction-justice-nixon-watergate',
    'https://b.thumbs.redditmedia.com/NOiql_JXFGZ3Az7VMeqCljyYptf1iHkuQ-uSpEh6Ksg.jpg'
    );

