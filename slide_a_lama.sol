pragma solidity ^0.4.8;
contract Lama {
    address first_player = 0;
    address second_player = 0;

    uint8 field_size = 5;
    int8[5][5] field;

    uint8 queue_size = 3;
    int8[3] queue = [-1, -1, -1];

    uint8 score_size = 7;
    int[7] scores = [10, 20, 30, 40, 70, 100, 150];

    function Lama() public {}

    uint64 _seed = 0;

    function Random(uint64 upper) private returns (uint64 randomNumber) {
        _seed = uint64(keccak256(keccak256(block.blockhash(block.number), _seed), block.timestamp));
        return _seed % upper;
    }

    function min(uint8 a, uint8 b) private returns (uint8) {
        return a < b ? a : b;
    }

    function AddPlayer() public payable {
        if (first_player == 0) {
            first_player = msg.sender;
        } else if (second_player == 0) {
            second_player = msg.sender;
            for (uint8 i = 0; i < field_size; i++) {
                for (uint8 j = 0; j < field_size; j++) {
                    field[i][j] = int8(Random(score_size));
                }
            }

            for (i = 0; i < queue_size; ++i) {
                queue[i] = int8(Random(score_size));
            }
        } else {
            revert();
        }
    }
    enum Side {Top, Left, Right}

    function Step(uint8 index, Side side) public {
        if (side == Side.Top) {
            if (field[0][index] != -1) {
                for (uint8 row = field_size - 1; row > 0; --row) {
                    field[index][row] = field[index][row - 1];
                }
                field[index][0] = queue[0];
            } else {
                for (row = 0; row < field_size; ++row) {
                    if (field[index][row] != -1) {
                        break;
                    }
                }
                field[index][row - 1] = queue[0];
            }
        } else if (side == Side.Left) {
            uint8 empty_index = 0;
            while (empty_index < field_size && field[empty_index][index] != -1) {
                ++empty_index;
            }

            for (uint8 col = min(empty_index, field_size - 1); col > 0; --col) {
                field[col][index] = field[col - 1][index];
            }

            field[0][index] = queue[0];
        } else if (side == Side.Right) {
            empty_index = field_size - 1;
            while (empty_index > 0 && field[--empty_index][index] != -1) {}

            for (col = empty_index; col < field_size; ++col) {
                field[col][index] = field[col + 1][index];
            }

            field[field_size - 1][index] = queue[0];
        } else {
            revert();
        }
        for (uint8 i = 1; i < queue_size; ++i) {
            queue[i - 1] = queue[i];
        }
        queue[queue_size - 1] = int8(Random(score_size));
    }
}