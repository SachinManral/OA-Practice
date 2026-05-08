window.JOSH_DSA_ROUND_SET = {
  id: 'dsaRounds',
  type: 'roundBank',
  label: 'JTG DSA Rounds',
  title: 'Josh Technology Group - DSA Question Bank',
  badge: 'Coding + technical rounds',
  description: 'Confirmed DSA questions from written, online coding, and technical interview rounds (2019-2025). MCQ/objective content is intentionally skipped because it already lives in the MCQ banks.',
  subjectLabels: {ALL:'All',Array:'Array','Linked List':'Linked List','Binary Tree':'Binary Tree',BST:'BST',DP:'DP','Binary Search':'Binary Search',String:'String',Graph:'Graph',Stack:'Stack',Sorting:'Sorting',BFS:'BFS',DFS:'DFS',Heap:'Heap','Two Pointer':'Two Pointer'},
  subjectOrder: ['ALL','Array','Linked List','Binary Tree','BST','DP','Binary Search','String','Graph','Stack','Sorting','BFS','DFS','Heap','Two Pointer'],
  rounds: [
    {
      short: 'R2',
      name: 'Round 2 - Subjective / Written Coding Test',
      badge: 'r2',
      desc: '3-4 coding questions, 45-75 min, comments plus time/space complexity required',
      questions: [
        {t:'Given an array of N elements, replace each element with the greatest element on its right side. Example: [6,7,11,4,10,8] -> [11,11,11,10,10,8]',tags:['Array'],diff:'easy',p:'GFG'},
        {t:'Given a linked list representing a number, add 15 to it and return the resulting linked list. Example: 9->9->9 becomes 1->0->1->4',tags:['Linked List'],diff:'easy',p:'GFG'},
        {t:'Given two binary trees, check if they have the same inorder traversal in O(n) time and O(1) space.',tags:['Binary Tree'],diff:'medium',p:'GFG'},
        {t:"Binary tree with two values per node: original data and absolute difference between left and right child. Verify if the children's property holds for the entire tree. Return 1 if it does.",tags:['Binary Tree'],diff:'medium',p:'JTG Own'},
        {t:'Given a 2D matrix, find the maximum sum by choosing one element from each column such that the value from the i-th column is strictly greater than the (i-1)-th column value.',tags:['Array','DP'],diff:'medium',p:'JTG Own'},
        {t:'Sort a given linked list in descending order without using STL.',tags:['Linked List','Sorting'],diff:'medium',p:'GFG'},
        {t:'Make every left child node of a binary tree odd by subtracting 1 if even, and every right child node even by adding 1 if odd. Solve in O(n) time and O(1) extra space.',tags:['Binary Tree'],diff:'medium',p:'GFG'},
        {t:'Find an element in an array such that all elements on its left are strictly smaller and all elements on its right are strictly larger.',tags:['Array'],diff:'easy',p:'GFG'},
        {t:'Given a linked list of characters, find the length of the longest non-repeating subsequence.',tags:['Linked List','String'],diff:'medium',p:'GFG'},
        {t:'Output-based question: a preorder traversal function with reverse operations applied over different ranges of a string. Predict the final output.',tags:['Binary Tree','String'],diff:'medium',p:'JTG Own'}
      ]
    },
    {
      short: 'R3',
      name: 'Round 3 - Online Coding Round 1',
      badge: 'r3',
      desc: '3 coding problems, 60-75 min, live proctoring, comments and complexity required',
      questions: [
        {t:'Move Zeroes: move all 0s to the end of an array while maintaining the relative order of non-zero elements. LeetCode #283.',tags:['Array'],diff:'easy',p:'LeetCode'},
        {t:'Find Bottom Left Tree Value: given a binary tree, find the leftmost value in the last row. LeetCode #513.',tags:['Binary Tree','BFS'],diff:'medium',p:'LeetCode'},
        {t:'Count Good Nodes in Binary Tree: count nodes where no earlier node on the root-to-node path has a greater value. LeetCode #1448.',tags:['Binary Tree','DFS'],diff:'medium',p:'LeetCode'},
        {t:'Reorder Linked List: reorder L0->L1->...->Ln as L0->Ln->L1->Ln-1->L2->Ln-2... LeetCode #143.',tags:['Linked List'],diff:'medium',p:'LeetCode'},
        {t:'Root-to-Leaf Path Sum: determine if a binary tree has a root-to-leaf path whose values sum to a target.',tags:['Binary Tree','DFS'],diff:'easy',p:'LeetCode/GFG'},
        {t:'String Reduction: if a character is surrounded by the same character on both left and right, delete the left and right characters. Return the final reduced string.',tags:['String','Stack'],diff:'medium',p:'JTG Own'},
        {t:"Given a linked list, update each node with the sum of itself and the (n-k)th node from the end, where k is the node's 1-indexed position.",tags:['Linked List'],diff:'medium',p:'JTG Own'},
        {t:'Maximum subarray sum in a circular array of size N. Non-empty subarray required.',tags:['Array','DP'],diff:'medium',p:'GFG'},
        {t:'Find Maximum Sum Subtree: given a binary tree, find the subtree with the maximum node-value sum.',tags:['Binary Tree','DFS'],diff:'medium',p:'GFG'},
        {t:'House Robber: find the maximum sum from an array such that no two adjacent houses are chosen. LeetCode #198.',tags:['Array','DP'],diff:'medium',p:'LeetCode'},
        {t:'Frog and the Well: a frog jumps A meters each day and slips B meters each night in a well of depth D. Find the minimum days to escape.',tags:['Math','Simulation'],diff:'easy',p:'GFG/CN'},
        {t:'Maximum consecutive element sum in a linked list: find the maximum sum of contiguous linked-list nodes.',tags:['Linked List','DP'],diff:'medium',p:'GFG'},
        {t:'Kth smallest number in every window of an array: for each window of size W, find the kth smallest element.',tags:['Array','Heap'],diff:'hard',p:'GFG'}
      ]
    },
    {
      short: 'R4',
      name: 'Round 4 - Online Coding Round 2',
      badge: 'r4',
      desc: '3 medium-hard coding problems, 75 min, live proctoring',
      questions: [
        {t:'Flatten BST to sorted linked list: convert a BST into a sorted singly linked list in inorder order.',tags:['BST','Linked List'],diff:'medium',p:'GFG'},
        {t:'Wave sort of linked list: arrange a linked list in wave form such that a0 >= a1 <= a2 >= a3...',tags:['Linked List','Sorting'],diff:'medium',p:'GFG'},
        {t:'Find rotation count in a rotated sorted array by returning the index of the minimum element.',tags:['Array','Binary Search'],diff:'medium',p:'GFG'},
        {t:'Burning Tree: given a binary tree and target node, find the minimum time to burn the entire tree. LeetCode #2385 variant.',tags:['Binary Tree','BFS','Graph'],diff:'hard',p:'GFG/LeetCode'},
        {t:'132 Pattern / increasing triplet variant: determine if there exist i < j < k satisfying the required ordered pattern.',tags:['Array','Stack'],diff:'medium',p:'LeetCode'},
        {t:'Largest Number: arrange non-negative integers so they form the largest possible number. LeetCode #179.',tags:['Array','Sorting','String'],diff:'medium',p:'LeetCode'},
        {t:"Flatten a doubly linked list where some nodes have a child pointer into one single-level doubly linked list.",tags:['Linked List'],diff:'medium',p:'GFG/LeetCode #430'},
        {t:'Given a sorted linked list, delete duplicate-number nodes and keep unique values. Example: 2->4->5->5->6->6->8 -> 2->4->5->6->8',tags:['Linked List'],diff:'easy',p:'GFG'}
      ]
    },
    {
      short: 'T1',
      name: 'Technical Interview Round 1',
      badge: 't1',
      desc: '2 DSA questions, roughly 60-90 min, dry runs on test cases',
      questions: [
        {t:'Maximum sum of nodes in a binary tree such that no two selected nodes are adjacent.',tags:['Binary Tree','DP'],diff:'medium',p:'GFG'},
        {t:'Rotate a linked-list sub-list from position M to N to the right by K places.',tags:['Linked List'],diff:'medium',p:'GFG'},
        {t:'Convert a binary tree to a doubly linked list in inorder order, using left as previous and right as next.',tags:['Binary Tree','Linked List'],diff:'medium',p:'GFG'},
        {t:'Largest BST in Binary Tree: find the size of the largest subtree that is also a BST.',tags:['BST','Binary Tree','DP'],diff:'hard',p:'GFG'},
        {t:'Flatten Binary Tree to Linked List in-place following preorder traversal. LeetCode #114.',tags:['Binary Tree','Linked List'],diff:'medium',p:'LeetCode'},
        {t:'Maximum sum elements in an array with no two adjacent elements selected.',tags:['Array','DP'],diff:'medium',p:'GFG'},
        {t:'Detect and remove a loop in a linked list.',tags:['Linked List'],diff:'medium',p:'GFG'},
        {t:'Check if a binary tree is height-balanced. LeetCode #110.',tags:['Binary Tree'],diff:'easy',p:'LeetCode/GFG'}
      ]
    },
    {
      short: 'T2',
      name: 'Technical Interview Round 2',
      badge: 't2',
      desc: '2 DSA questions, roughly 90-180 min, approach discussion and dry runs',
      questions: [
        {t:'Koko Eating Bananas: binary search on answer to find the minimum eating speed K. LeetCode #875.',tags:['Binary Search','Array'],diff:'medium',p:'LeetCode'},
        {t:'Capacity to Ship Packages Within D Days: find the least ship capacity needed. LeetCode #1011.',tags:['Binary Search','Array'],diff:'medium',p:'LeetCode'},
        {t:'Aggressive Cows: place C cows in N stalls to maximize the minimum distance between any two cows.',tags:['Binary Search','Array'],diff:'medium',p:'GFG/CN'},
        {t:'Maximum contiguous circular sum in an array. LeetCode #918 variant.',tags:['Array','DP'],diff:'medium',p:'GFG'},
        {t:'Maximum absolute difference between ancestor and node in a binary tree. LeetCode #1026 variant.',tags:['Binary Tree','DFS'],diff:'medium',p:'GFG'},
        {t:'Morris inorder traversal of a binary tree without recursion and using O(1) space.',tags:['Binary Tree'],diff:'hard',p:'GFG'},
        {t:'Rearrange linked list by subtracting corresponding mirror nodes; update only the first half. Example: 1->2->3->5->9->6->3->2->0 becomes 1->0->0->-1->9->6->3->2->0',tags:['Linked List'],diff:'medium',p:'JTG Own'},
        {t:'For each array element, count the number of elements to its left that are strictly greater.',tags:['Array','BIT/Segment Tree'],diff:'medium',p:'GFG'},
        {t:'Remove the Nth node from the end of a linked list. LeetCode #19.',tags:['Linked List'],diff:'medium',p:'LeetCode'},
        {t:'Convert BST to greater sum tree: replace every node with the sum of all values greater than or equal to it. LeetCode #538/#1038.',tags:['BST'],diff:'medium',p:'LeetCode'}
      ]
    },
    {
      short: 'T3',
      name: 'Technical Interview Round 3',
      badge: 't3',
      desc: '2 DSA questions, roughly 90-165 min, highest difficulty',
      questions: [
        {t:'Minimum jumps to cross a bridge represented by 0s and 1s, using allowed jump lengths. Example bridge [1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1], jumps [2,3,5,6] -> 4',tags:['Array','Graph','DP'],diff:'hard',p:'JTG Own'},
        {t:"BST pruning by average: delete a node if its value is not equal to the average of its left and right children's values. Return the pruned BST.",tags:['BST'],diff:'hard',p:'JTG Own'},
        {t:'Minimum time to finish all jobs with K workers by minimizing the maximum time taken by any worker.',tags:['Binary Search','Array','DP'],diff:'hard',p:'GFG'},
        {t:'Find all pairs in a BST whose sum equals a target key in O(N) time and O(H) space.',tags:['BST'],diff:'medium',p:'GFG'},
        {t:'Shift all existing nodes to the right at each level of a binary tree, filling from the rightmost valid position.',tags:['Binary Tree','BFS'],diff:'hard',p:'JTG Own'},
        {t:'Next node at same level: given a node, find the next node to its right on the same level. LeetCode #116/#117.',tags:['Binary Tree','BFS'],diff:'medium',p:'LeetCode'},
        {t:'Sum of all grandchildren of even-valued grandparents in a binary tree. LeetCode #1315.',tags:['Binary Tree','DFS'],diff:'medium',p:'LeetCode'},
        {t:'Rearrange linked-list nodes to alternate between first and last positions: L0->Ln->L1->Ln-1...',tags:['Linked List'],diff:'medium',p:'GFG'},
        {t:'2D view of binary tree: print the binary tree sideways / rotated 90 degrees without modifying it.',tags:['Binary Tree','BFS'],diff:'medium',p:'GFG'},
        {t:'Sum of nodes at distance K from root in a binary tree.',tags:['Binary Tree','BFS/DFS'],diff:'medium',p:'GFG'},
        {t:'Trim a BST by deleting nodes outside range [L, R]. LeetCode #669.',tags:['BST'],diff:'medium',p:'LeetCode'},
        {t:'Three-way partition an array around K: elements less than K, then equal to K, then greater than K.',tags:['Array','Two Pointer'],diff:'medium',p:'GFG'},
        {t:'Given a valid mathematical expression stored in a linked list, count redundant parentheses. Example: ((a-b)+(((c+d)))+(e*f)) -> 2',tags:['Linked List','Stack','String'],diff:'medium',p:'JTG Own'},
        {t:'Print binary-tree nodes whose subtree satisfies: sum of all left-child values equals sum of all right-child values.',tags:['Binary Tree','DFS'],diff:'hard',p:'JTG Own'},
        {t:'Given a doubly linked list, find sums of first+nth, second+(n-1)th, and so on. Return the sums as a new list.',tags:['Linked List'],diff:'easy',p:'JTG Own'}
      ]
    }
  ]
};

window.JOSH_DSA_JTG_FOCUSED_SET = {
  id: 'jtgDsaFocused',
  type: 'roundBank',
  label: 'JTG DSA Focused',
  title: 'Josh Technology Group - Focused DSA Coding Set',
  badge: '20 round-wise DSA prompts',
  description: 'Focused Josh Technology Group DSA coding questions from GFG Interview Experiences, Glassdoor, Medium, and InterviewBit cross-references. Prioritize comments, dry runs, and time/space complexity in every solution.',
  subjectLabels: {ALL:'All',Array:'Array','Linked List':'Linked List','Binary Tree':'Binary Tree',BST:'BST',DP:'DP','Binary Search':'Binary Search',String:'String',Graph:'Graph',Stack:'Stack',BFS:'BFS',DFS:'DFS','Two Pointer':'Two Pointer'},
  subjectOrder: ['ALL','Array','Linked List','Binary Tree','BST','DP','Binary Search','String','Graph','Stack','BFS','DFS','Two Pointer'],
  rounds: [
    {
      short: 'R2',
      name: 'Round 2 - Subjective Round',
      badge: 'r2',
      desc: '75 min, medium level, 3 coding plus 1 output-based question. Write full program, comments, and time/space complexity.',
      questions: [
        {t:'Move Zeroes: move all zeroes in an array to the end while maintaining the relative order of non-zero elements. Solve in O(n) time and O(1) space. LeetCode #283.',tags:['Array','Two Pointer'],diff:'easy',p:'LeetCode'},
        {t:'Find Element at Equilibrium Index variant: find an element such that all elements on its left are strictly smaller and all elements on its right are strictly larger. Return -1 if no such element exists.',tags:['Array'],diff:'medium',p:'GFG'},
        {t:'String Pattern Sequence: given a string of only I and D characters, form the minimum number with no digit repetition and all digits greater than 0 that follows the pattern. Print "String not found" if length is 0 and "String length exceeds" if length is greater than 8. Example: IDIDI -> 132546.',tags:['String','Stack'],diff:'medium',p:'GFG'},
        {t:'Transform Binary Tree Children: make every left child node odd by subtracting 1 when required, and every right child node even by adding 1 when required. Solve in O(n) time and O(1) extra space.',tags:['Binary Tree'],diff:'medium',p:'JTG/GFG'}
      ]
    },
    {
      short: 'R3',
      name: 'Round 3 - Coding Round 1',
      badge: 'r3',
      desc: '75 min, medium level, live proctoring. Comments are mandatory.',
      questions: [
        {t:'Count Good Nodes in Binary Tree: a node is good if no node on the root-to-node path has a value greater than it. Return the number of good nodes. LeetCode #1448.',tags:['Binary Tree','DFS'],diff:'medium',p:'LeetCode'},
        {t:'Find Bottom-Left Tree Value: return the leftmost value in the last row of a binary tree. LeetCode #513.',tags:['Binary Tree','BFS'],diff:'medium',p:'LeetCode'},
        {t:'Maximum Sum of Consecutive Elements in a Linked List: apply Kadane algorithm on linked-list nodes to find the maximum contiguous node-value sum.',tags:['Linked List','DP'],diff:'medium',p:'InterviewBit'},
        {t:'Rearrange Array Around Pivot K: rearrange the array so elements less than K come first, elements greater than K come next, and all elements equal to K are placed at the end. Example: [6,7,2,5,4,9,8,5], K=5 -> [2,4,6,7,9,8,5,5].',tags:['Array','Two Pointer'],diff:'medium',p:'GFG'},
        {t:'Increasing Triplet Subsequence: return true if there exist indices i < j < k such that nums[i] < nums[j] < nums[k]. Solve in O(n) time and O(1) space. LeetCode #334.',tags:['Array'],diff:'medium',p:'LeetCode'}
      ]
    },
    {
      short: 'R4',
      name: 'Round 4 - Coding Round 2',
      badge: 'r4',
      desc: '75 min, medium-hard level, live proctoring with chat response required.',
      questions: [
        {t:'Largest BST in Binary Tree: find the size of the largest subtree that is also a valid BST. GFG Largest BST / LeetCode #333.',tags:['Binary Tree','BST','DP'],diff:'hard',p:'GFG/LeetCode'},
        {t:'Maximum Sum of Non-Adjacent Nodes in Binary Tree: choose nodes for maximum sum such that no selected nodes have a parent-child relationship. House Robber III tree variant. LeetCode #337.',tags:['Binary Tree','DP'],diff:'hard',p:'LeetCode/GFG'},
        {t:'Minimum Jumps to Cross a Bridge: bridge is represented by 1s and 0s where 1 is valid and 0 is broken; allowed jump lengths are given. Find the minimum jumps to reach the other end. Example bridge [1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1], jumps [2,3,5,6] -> 4.',tags:['Array','Graph','DP'],diff:'hard',p:'InterviewBit'},
        {t:'Burning Tree: given a binary tree and target node, return the minimum time to burn the entire tree when fire spreads to parent, left child, and right child every second. LeetCode #2385 / GFG Burning Tree.',tags:['Binary Tree','BFS','Graph'],diff:'hard',p:'LeetCode/GFG'}
      ]
    },
    {
      short: 'R5',
      name: 'Round 5 - Technical Interview Round 1',
      badge: 't1',
      desc: '1-2 hrs, hard level. Usually 2 DSA questions with dry run and optimization discussion.',
      questions: [
        {t:'Rotate Sub-List of Linked List: rotate the linked-list sub-list from position M to N to the right by K places.',tags:['Linked List'],diff:'hard',p:'GFG'},
        {t:'Maximum Sum of Non-Adjacent Array Elements: find the maximum sum of array elements such that no two selected elements are adjacent. LeetCode #198 variant.',tags:['Array','DP'],diff:'medium',p:'LeetCode/GFG'},
        {t:'Zigzag Level Order Traversal of Binary Tree: return the level order traversal while alternating left-to-right and right-to-left order. LeetCode #103.',tags:['Binary Tree','BFS'],diff:'medium',p:'LeetCode/GFG'},
        {t:'Binary Tree to Doubly Linked List: convert a binary tree to a DLL in-place using left as previous and right as next. The DLL must follow inorder traversal order.',tags:['Binary Tree','Linked List'],diff:'hard',p:'GFG'}
      ]
    },
    {
      short: 'R6',
      name: 'Round 6 - Technical Interview Round 2',
      badge: 't2',
      desc: '2-3 hrs, hard level. Deep dive on binary search on answer and BST-style questions.',
      questions: [
        {t:'Koko Eating Bananas: given piles and H hours, find the minimum eating speed K such that all bananas are eaten within H hours. Binary search on answer. LeetCode #875.',tags:['Binary Search','Array'],diff:'medium',p:'LeetCode'},
        {t:'Find All Pairs in BST with Sum K: given a BST where every node also has a parent pointer, find all pairs of nodes whose values sum to K.',tags:['BST','Two Pointer'],diff:'hard',p:'GFG'},
        {t:'Sum of Nodes at Distance K from Root in Binary Tree: find the sum of all node values exactly K edges away from the root.',tags:['Binary Tree','BFS','DFS'],diff:'medium',p:'GFG/LeetCode'}
      ]
    }
  ]
};
