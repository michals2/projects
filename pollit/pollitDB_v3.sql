-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-05-16 21:49:01.72

-- tables
-- Table: Article
CREATE TABLE articles (
    Article_ID serial  NOT NULL,
    ArticleTitle varchar(100)  NOT NULL,
    ArticleURL varchar(100)  NOT NULL,
    ArticleThumbnailURL varchar(100)  NOT NULL,
    CommentPageURL varchar(100)  NOT NULL,
    PostTime time  NOT NULL,
    AverageCompositeScore integer  NOT NULL,
    AverageX integer  NOT NULL,
    AverageY integer  NOT NULL,
    CONSTRAINT Article_pk PRIMARY KEY (Article_ID)
);

-- Table: Comment
CREATE TABLE comments (
    Comment_ID serial  NOT NULL,
    Article_ID serial  NOT NULL,
    CommentText text  NOT NULL,
    AverageCompositeScore integer  NOT NULL,
    AverageX integer  NOT NULL,
    AverageY integer  NOT NULL,
    CONSTRAINT Comment_pk PRIMARY KEY (Comment_ID)
);

-- Table: Vote
CREATE TABLE votes (
    Vote_ID serial  NOT NULL,
    Article_ID serial  NOT NULL,
    Comment_ID serial  NOT NULL,
    VoteTime date  NOT NULL,
    CompositeScore integer  NOT NULL,
    X integer  NOT NULL,
    Y integer  NOT NULL,
    CONSTRAINT Vote_pk PRIMARY KEY (Vote_ID)
);

-- foreign keys
-- Reference: Comment_Article (table: Comment)
ALTER TABLE Comment ADD CONSTRAINT Comment_Article
    FOREIGN KEY (Article_ID)
    REFERENCES Article (Article_ID)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Vote_Article (table: Vote)
ALTER TABLE Vote ADD CONSTRAINT Vote_Article
    FOREIGN KEY (Article_ID)
    REFERENCES Article (Article_ID)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Vote_Comment (table: Vote)
ALTER TABLE Vote ADD CONSTRAINT Vote_Comment
    FOREIGN KEY (Comment_ID)
    REFERENCES Comment (Comment_ID)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;




