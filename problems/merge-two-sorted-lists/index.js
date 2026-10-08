class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy

    while (list1 && list2) {
        if (list1.val > list2.val) {
            current.next = list2
            list2 = list2.next
        } else {
            current.next = list1
            list1 = list1.next
        }
        current = current.next
    }

    // current.next = list1 || list2;

    return dummy

};

const list1 = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(4)
    )
);

const list2 = new ListNode(
    1,
    new ListNode(
        3,
        new ListNode(4)
    )
);

console.log(mergeTwoLists(list1, list2))