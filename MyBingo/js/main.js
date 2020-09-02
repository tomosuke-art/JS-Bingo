'use strict';

{
  function createColumn(col){
    const source = [];
    for (let i = 0; i < 15; i++){
      //1~15
      // source[i] = i + 1;
      //16~30
      // source[i] = i + 1 + 15 * 1;
      //31~45
      // source[i] = i + 1 + 15 * 2;
      source[i] = i + 1 + 15 * col;
    }
    const column =[];
    for (let i = 0; i< 5; i++) {
        column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        
      }
      return column;
  }
//列ごとの配列を作る処理
  function createColumns() {

    const columns = [];
    // columns[0] = createColumn(0);
    // columns[1] = createColumn(1);
    // columns[2] = createColumn(2);
    // columns[3] = createColumn(3);
    // columns[4] = createColumn(4);
    //　上記をまとめると
    for(let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;

  }


  // function createBingo(columns) {
  //   const bingo = [];
  //   for (let row = 0; row < 5; row++){
  //     bingo[row] = [];
  //     for (let col = 0; col < 5; col++){
  //       bingo[row][col] = columns[col][row]; //行・列を反転
  //     }
  //   }
  //   return bingo;
  // }

  function renderBingo(columns) {
    //ページ反映の処理
    for(let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');　//createElement = 新たにHTML要素を追加する。ここではtrタグ
      for(let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td); //appendChild = HTMLへの要素の追加
      }
      document.querySelector('tbody').appendChild(tr); //querySelector = あらゆるHTML要素を抜き出せる
    }
  }

  const columns = createColumns();
  //const bingo = createBingo(columns);
  renderBingo(columns);
}
