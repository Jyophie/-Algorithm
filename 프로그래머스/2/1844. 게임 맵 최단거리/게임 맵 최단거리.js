function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // 상, 하, 좌, 우
    const queue = [[0, 0, 1]]; // 초기 위치와 거리

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        if (x === n - 1 && y === m - 1) {
            return dist;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true; // 방문 표시
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1; // 도달할 수 없는 경우
}

/*
올바른 접근 방법은 너비 우선 탐색(BFS) 알고리즘을 사용하는 것입니다. 
BFS를 사용하면 각 위치에 도달할 때까지의 최소 이동 횟수를 기록하면서 맵 전체를 효율적으로 탐색할 수 있습니다. 
이미 방문한 위치를 다시 방문하지 않도록 관리하며, 모든 가능한 방향으로의 이동을 고려합니다. 
상대 팀 진영에 도달할 수 없는 경우를 처리하기 위해, 탐색이 끝난 후에도 도착지에 도달하지 못했으면 -1을 반환합니다.

이를 위해 수정된 솔루션은 다음과 같이 구현할 수 있습니다:

1. 맵의 각 위치에 대해 방문 여부를 기록하기 위한 별도의 배열을 사용하거나, 방문한 위치를 0으로 설정하여 재방문하지 않도록 합니다.
2. 큐를 사용하여 BFS를 구현합니다. 큐에는 현재 위치와 시작점으로부터의 거리를 저장합니다.
3. 상, 하, 좌, 우 방향으로 이동 가능한지 확인하고, 가능한 경우 해당 위치를 큐에 추가합니다. 이 때, 거리는 현재 위치까지의 거리 + 1로 설정합니다.
4. 목표 위치에 도달하면 현재까지의 거리를 반환합니다.
5. 모든 가능한 위치를 탐색한 후에도 목표 위치에 도달하지 못하면 -1을 반환합니다.
*/
