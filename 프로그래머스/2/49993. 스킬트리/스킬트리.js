function solution(skill, skill_trees) {
    let answer = 0;
    
    for (let tree of skill_trees) {
        let filtered = tree.split("").filter(char => skill.includes(char)).join("");
        
        if (skill.startsWith(filtered)) {
            answer++;
        }
    }
    
    return answer;
}
