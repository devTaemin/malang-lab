package com.c102.malanglab.game.adapter.persistence;

import com.c102.malanglab.game.domain.Setting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettingRepository extends JpaRepository<Setting, String> {
}
