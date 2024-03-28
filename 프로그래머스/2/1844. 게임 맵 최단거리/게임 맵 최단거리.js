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
