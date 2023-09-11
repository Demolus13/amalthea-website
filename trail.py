a = int(input())

def getNums(num) -> list:
    if num < 10:
        num.append(num)
        return [num]
    else:
        return getNums(num // 10).append(num % 10)

