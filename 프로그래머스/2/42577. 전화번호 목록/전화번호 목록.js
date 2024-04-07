function solution(phone_book) {
    // 전화번호 정렬
    phone_book.sort(); 
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            // 다음 번호가 현재 번호로 시작한다면, 접두어가 존재하는 것이므로 false 반환
            return false; 
        }
    }
    
    // 모든 번호를 확인한 후 접두어가 없다면 true 반환
    return true; 
}
