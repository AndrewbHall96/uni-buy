
USE sellerInfo;

INSERT INTO Sellers (category, productTitle, price, conditionName, linkToImage, description, createdAt, updatedAt, UserId) 
VALUES ('bikes', 'SweetBike', 90, 'Good', 'asdfasedf.com', 'good bike', NOW(), NOW(), 99);

-- INSERT INTO Sellers (firstName, lastName, email, category, productTitle, price, conditionName, linkToImage, description, createdAt, updatedAt) 
-- VALUES ('Gary', 'Bergman', 'test@test.com', 'bikes', 'SweetBike', 90, 'Good', 'asdfasedf.com', 'good bike', NOW(), NOW());