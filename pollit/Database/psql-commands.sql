
-- insert entry into database
INSERT INTO vote (Article_ID, Comment_ID, VoteTime, CompositeScore, X, Y) VALUES ($0,$2,'1/1/17', 50,50,50);
INSERT INTO article (Article_ID, ArticleTitle, ArticleURL, ArticleThumbnailURL, CommentPageURL, PostTime, AverageCompositeScore, AverageX, AverageY) VALUES (0, 'test-title-2','test-url-2','test-thumbnail-url-2', 'test-comment-page-url-2', '4:00 pm', 44,33,22);
