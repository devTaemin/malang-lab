package com.c102.malanglab.game.application.port.out;

import com.c102.malanglab.game.dto.Message;
import com.c102.malanglab.game.dto.GuestRequest;

import java.util.List;

public interface GameUniCastPort {
    void alertGuestList(String userId, Message<List<GuestRequest>> message);
}
