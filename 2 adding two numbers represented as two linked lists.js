class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new ListNode(data);

    if (!this.head) {
      //handle the edge case of empty linked list
      this.head = newNode; //make the newNode as head of the list
    } else {
      let current = this.head;
      while (current.next) {
        // if list is not empty
        current = current.next; //traverse to the end of the list
      }
      current.next = newNode; // and add the newNode here
    }
    this.size++; //increment size
  }

  printList() {
    let current = this.head;
    let str ='';
    while (current !== null) {
      console.log(current.data);
      str+= current.data+'=>';
      current = current.next;
    }
    console.log(`Size of the list is ${this.size}`);
    return str;
  }
}

const l1 = new LinkedList();
l1.append(2);
l1.append(4);
l1.append(3);

// Create l2 with values 5, 6, 4
const l2 = new LinkedList();
l2.append(5);
l2.append(6);
l2.append(4);

// SOLUTION
function ListTostring(list) {
  let str = "";
  let current = list.head;
  while (current !== null) {
    str += current.data;
    // console.log(current.data);
    current = current.next;
  }
  // console.log(`returning ${str}`);
  return str;
}

function solution(list1, list2) {
  // console.log(
  //   `reversred string: ${ListTostring(list).split("").reverse().join()}`
  // );
   let resultList = new LinkedList();
  let str = ListTostring(list1).split("").reverse().join("");
  console.log(`rersed string:${str}`);
  let n1 = Number(str);
  console.log(`reversed number1: ${n1}`);
  let str2 = ListTostring(list2).split("").reverse().join("");
  console.log(`rersed string:${str2}`);
  let n2 = Number(str2);
  console.log(`reversed number2: ${n2}`);
  let sum = n1 + n2;
  console.log(`sum is ${sum}`);
  let sumstr = "";
  sumstr = String(sum);
  console.log(sumstr);
  sumstr = sumstr.split("").reverse().join("");
  console.log(`reversed sum: ${sumstr}`);
 
  for (let index = 0; index < sumstr.length; index++) {
    resultList.append(sumstr[index]);
  }
  console.log(` returning............${resultList.printList()}`);
  return resultList;
}

solution(l1, l2);

// solution(l2);
