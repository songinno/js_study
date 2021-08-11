

// < 객체의 중첩구조 >

// 예시: 게시판 게시글

var articles = {
    totalCount: 3670, // 총 게시물 수
    admin: '김말동',   // 관리자 이름
    pageNumber: 11,   //페이지 넘버
    articleList: [   // 게시물 데이터
        {
            bno: 5, //글번호
            title: '뽀로로랜드', //제목
            write: '뽀로로',
            content: 'afaadf',
            viewCount: 0,
            regDate: '2021-08-11'
        },
        {
            bno: 4, //글번호
            title: '뽀로로랜드', //제목
            write: '뽀로로',
            content: 'afaadf',
            viewCount: 0,
            regDate: '2021-08-11'
        },
        {
            bno: 3, //글번호
            title: '뽀로로랜드', //제목
            write: '뽀로로',
            content: 'afaadf',
            viewCount: 0,
            regDate: '2021-08-11'
        },
        {
            bno: 2, //글번호
            title: '뽀로로랜드', //제목
            write: '뽀로로',
            content: 'afaadf',
            viewCount: 0,
            regDate: '2021-08-11'
        }

    ]
};

console.log(articles.admin);
console.log('-----------------------');
console.log(articles.articleList);
console.log('-----------------------');
console.log(articles.articleList[2].title);
console.log(articles.articleList[2]['title']);










