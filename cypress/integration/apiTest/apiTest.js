let iD;

When(/^I mock the api response to get only one record$/, () => {
  cy.intercept(
    {
      method: "GET",
      url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
    },
    {
      statusCode: 200,
      body: [
        {
          book_name: "RestAssured with Java",
          isbn: "RSU",
          aisle: "2301",
        },
      ],
    }
  ).as("bookApiResponse");
  cy.get("button[class='btn btn-primary']").click();
  cy.wait("@bookApiResponse").should(({ request, response }) => {
    cy.log(response);
    cy.get("tr").should("have.length", response.body.length + 1);
  });
});

Then(/^I see error message "([^"]*)"$/, (args1) => {
  cy.get("p").should("have.text", args1);
});

let statusCodeofModifiedReq = 0;
When(/^I mock the api request to some other user$/, () => {
  cy.intercept(
    "GET",
    "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
    (req) => {
      (req.url =
        "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"),
        req.continue((res) => {
          statusCodeofModifiedReq = res.statusCode;
          //   expect(res.statusCode).to.equal(403);
          console.log("vv: ", statusCodeofModifiedReq);
        });
    }
  ).as("dummyUrl");
  cy.get("button[class='btn btn-primary']").click();
  cy.wait("@dummyUrl");
});

Then(/^I should get status code as "([^"]*)"$/, (args1) => {
  //   statusCodeofModifiedReq.should("eq", args1);
  expect(statusCodeofModifiedReq).to.equal(Number(args1));
});

When(/^I hit the POST request$/, () => {
  cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
    name: "Learn Appium Automation with Java",
    isbn: "bcd",
    aisle: "227",
    author: "John foe",
  }).then((response) => {
    iD = response.body.ID;
    expect(response.body).to.have.property("ID", iD);
    expect(response.body).to.have.property("Msg", "successfully added");
    expect(response.status).to.equal(200);
  });
});

Then(/^I delete the added book$/, () => {
  cy.request({
    method: "POST",
    url: "http://216.10.245.166/Library/DeleteBook.php",
    body: {
      ID: iD,
    },
  }).then((response) => {
    expect(response.body).to.have.property(
      "msg",
      "book is successfully deleted"
    );
    expect(response.status).to.equal(200);
  });
});
