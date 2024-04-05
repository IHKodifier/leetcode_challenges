import collections
from typing import List

board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

board2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "2"],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

#
# solution
#
# 
class Solution:
    def IsVsalidSudoku(self,board:List[List[str]])->bool:
        cols=collections.defaultdict(set)
        rows=collections.defaultdict(set)
        boxes=collections.defaultdict(set)

        for r in range(9):
            for c in range(9):
                if board[r][c]!=".":
                    if (board[r][c] in rows[r] or 
                        board[r][c] in cols[c] or 
                        board[r][c] in boxes[(r//3,c//3)]):
                        return False
                    rows[r].add(board[r][c])
                    cols[c].add(board[r][c])
                    boxes[(r//3,c//3)].add(board[r][c])
        return True

print(f'board valudity is {Solution().IsVsalidSudoku(board1)}')
#
