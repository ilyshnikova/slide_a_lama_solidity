pragma solidity ^0.4.8;
contract Lama {

    struct Player {
        address player_address;
        uint64 score;
    }

    Player[2] players;

    address first_player = 0;
    address second_player = 0;

    uint8 field_size = 5;
    int8[5][5] field;

    uint8 queue_size = 3;
    int8[3] queue = [-1, -1, -1];

    uint8 score_size = 7;
    int[7] scores = [10, 20, 30, 40, 70, 100, 150];

    uint8 field_update_index = 0;

    enum Side {Top, Left, Right}

    function Lama() public {}

    uint64 _seed = 0;

    function Random(uint64 upper) private returns (uint64 randomNumber) {
        _seed = uint64(keccak256(keccak256(block.blockhash(block.number), _seed), block.timestamp));
        return _seed % upper;
    }

    function min(uint8 a, uint8 b) private pure returns (uint8) {
        return a < b ? a : b;
    }

    event PlayerAdded(address player1, address player2, uint8 index);

    // increase changing_index = field_update_index++ each event
    event FieldChanging(int8[5][5] field, uint8 changing_index);
    event AvailableBlocks(int8[3] blocks);

    // event after player step was finished
    event StepFinished(address player_address);
    event PlayerScore(address player_address, uint64 score);

    event TopSide();
    event LeftSide();
    event RightSide();

    function SwapPlayers() private {
        address player_address = players[0].player_address;
        players[0].player_address = players[1].player_address;
        players[1].player_address = player_address;

        uint64 score = players[0].score;
        players[0].score = players[1].score;
        players[1].score = score;
    }

    function AddPlayer() public payable {
        if (players[0].player_address == 0) {
            players[0] = Player({player_address: msg.sender, score: 0});
            PlayerAdded(players[0].player_address, players[1].player_address, 0);
        } else if (players[1].player_address == 0) {
            players[1] = Player({player_address: msg.sender, score: 0});
            PlayerAdded(players[0].player_address, players[1].player_address, 1);
            for (uint8 col = 0; col < field_size; col++) {
                for (uint8 row = 0; row < field_size; row++) {
                    int8 first = -1;
                    int8 second = -1;
                    if (row > 1) {
                        if (field[col][row - 1] == field[col][row - 2]) {
                            first = field[col][row - 1];
                        }
                    }
                    if (col > 1) {
                        if (field[col - 1][row] == field[col - 2][row]) {
                            second = field[col - 1][row];
                        }
                    }
                    field[col][row] = int8(Random(score_size));

                    while (field[col][row] == first || field[col][row] == second) {
                        field[col][row]= int8(Random(score_size));
                    }
                }
            }

            FieldChanging(field, field_update_index++);

            for (uint8 i = 0; i < queue_size; ++i) {
                queue[i] = int8(Random(score_size));
            }

            AvailableBlocks(queue);
        } else {
            revert();
        }
    }

    function FallDown(uint8 x, uint8 y) private {
        //dont fall emptyness || already at the bottom || already under nonempty block
        if (field[x][y] == -1 || y + 1 == field_size || field[x][y + 1] != -1) {
            return;
        }

        for (uint8 row = y + 1; row < field_size; ++row) {
            if (field[x][row] != -1) {
                break;
            }
        }
        field[x][row] = field[x][y];
        field[x][y] = -1;
    }

    function Gravity() private {
        for (uint8 col = field_size  - 1; col-- > 0;) {
            for (uint8 row = field_size - 1; row-- > 0;) {
                FallDown(col, row);
            }
        }
    }

    function ColGravity(uint8 col, uint8 start_row_index) private {
        for (uint8 row = start_row_index; row-- > 0;) {
                FallDown(col, row);
        }
    }

    function CheckWins() private returns (bool) {
        //check horizontal blocks sequences
        for (uint8 row = 0; row < field_size; ++row) {
            for (uint8 col = 0; col <= 2; ++col) {
                int8 value = field[col][row];
                if (value == -1) {
                    continue;
                }
                uint64 count = 1;
                uint8 index = col;

                // find win line
                while (index + 1 < field_size && field[index][row] == field[index + 1][row]) {
                    count++;
                    index++;
                }

                // if number of equal blocks more then 2 destroy it and update currnet player score
                // and fall all blocks above destroyed bocks
                if (count >= 3) {
                    for (;col <= index; ++col) {
                        field[col][row] = -1;
                    }
                    // show destroyed blocks
                    FieldChanging(field, field_update_index++);

                    // show falled blocks
                    Gravity();
                    FieldChanging(field, field_update_index++);


                    players[0].score += uint64(scores[uint8(value)]) * (count - 2);
                    PlayerScore(players[0].player_address, players[0].score);
                    return true;
                }
            }
        }

        //check vertical blocks sequences
        for (col = 0; col < field_size; ++col) {
            for (row = 0; row <= 2; ++row) {
                value = field[col][row];
                if (value == -1) {
                    continue;
                }

                count = 1;
                index = row;
                // find win line
                while (index + 1 < field_size && field[col][index] == field[col][index + 1]) {
                    count++;
                    index++;
                }

                // if number of equal blocks more then 2 destroy it and update currnet player score
                if (count >= 3) {
                    for (;row <= index; ++row) {
                        field[col][row] = -1;
                    }
                    // Show field with destroyed blocks
                    FieldChanging(field, field_update_index++);

                    // fall all blocks above destroyed bocks
                    //ColGravity(col, field_size - 1);
                    Gravity();
                    FieldChanging(field, field_update_index++);

                    players[0].score += uint64(scores[uint8(value)]) * (count - 2);
                    return true;
                }
            }
        }
        return false;
    }

    function FindEqualBlocks() private {
        while (CheckWins()) {}
    }

    function Step(uint8 index, Side side) public returns (string) {
        if (msg.sender != players[0].player_address) {
            return "incorrect player";
            revert();
            return;
        }

        if (side == Side.Top) {
            TopSide();
            if (field[index][0] != -1) {
                // destroy bottom block and shift all top blocks
                for (uint8 row = field_size - 1; row >= 1; --row) {
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
            LeftSide();
            uint8 empty_index = 0;
            while (empty_index < field_size && field[empty_index][index] != -1) {
                ++empty_index;
            }

            for (uint8 col = min(empty_index, field_size - 1); col > 0; --col) {
                field[col][index] = field[col - 1][index];
            }
            if (empty_index != field_size) {
                FallDown(empty_index, index);
            }

            field[0][index] = queue[0];
        } else if (side == Side.Right) {
            RightSide();
            empty_index = field_size;
            while (empty_index > 0 && field[--empty_index][index] != -1) {}

            for (col = empty_index; col + 1 < field_size; ++col) {
                field[col][index] = field[col + 1][index];
            }

            FallDown(empty_index, index);

            field[field_size - 1][index] = queue[0];
        } else {
            revert();
            return "incorrect side";
        }

        // try to find equal blocks sequences
        CheckWins();

        // shift new blocks queue and add one new
        for (uint8 i = 1; i < queue_size; ++i) {
            queue[i - 1] = queue[i];
        }
        queue[queue_size - 1] = int8(Random(score_size));

        FieldChanging(field, field_update_index++);
        AvailableBlocks(queue);

        SwapPlayers();
        StepFinished(players[0].player_address);
        return "success";
    }


    function GetField() public view returns (int8[5][5]) {
        return field;
    }

    function GetBlocks() public view returns (int8[3]) {
        return queue;
    }

    function GetPlayers() public view returns (address player1, address player2) {
        return (players[0].player_address, players[1].player_address);
    }

}
